use crate::cust_validation::validate_vec_scopes;
use crate::AuthProviderType;
use jwt_simple::prelude::{Deserialize, Serialize};
use rauthy_common::constants::{
    RE_ALNUM, RE_CLIENT_ID_EPHEMERAL, RE_CLIENT_NAME, RE_CODE_CHALLENGE, RE_PEM, RE_SCOPE_SPACE,
    RE_URI,
};
use utoipa::ToSchema;
use validator::Validate;

#[derive(Debug, Deserialize, Validate, ToSchema)]
pub struct ProviderRequest {
    /// Validation: `[a-zA-Z0-9À-ÿ-\s]{2,128}]`
    #[validate(regex(path = "RE_CLIENT_NAME", code = "[a-zA-Z0-9À-ÿ-\\s]{2,128}"))]
    pub name: String,
    pub typ: AuthProviderType,
    pub enabled: bool,

    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub issuer: String,
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub authorization_endpoint: String,
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub token_endpoint: String,
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub userinfo_endpoint: String,

    pub danger_allow_insecure: Option<bool>,
    pub use_pkce: bool,

    // This validation is pretty loose, but if we make it too strict,
    // we will most probably get into compatibility issues.
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub client_id: String,
    /// Validation: max length is 256
    #[validate(length(max = 256))]
    pub client_secret: Option<String>,
    /// Validation: `[a-z0-9-_/:\s*]{0,512}`
    #[validate(regex(path = "RE_SCOPE_SPACE", code = "[a-z0-9-_/:\\s*]{0,512}"))]
    pub scope: String,
    /// Validation: `(-----BEGIN CERTIFICATE-----)[a-zA-Z0-9+/=\n]+(-----END CERTIFICATE-----)`
    #[validate(regex(
        path = "RE_PEM",
        code = "(-----BEGIN CERTIFICATE-----)[a-zA-Z0-9+/=\n]+(-----END CERTIFICATE-----)"
    ))]
    pub root_pem: Option<String>,

    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub admin_claim_path: Option<String>,
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub admin_claim_value: Option<String>,
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub mfa_claim_path: Option<String>,
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub mfa_claim_value: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct ProviderCallbackRequest {
    /// Validation: `[a-zA-Z0-9]`
    #[validate(regex(path = "RE_ALNUM", code = "[a-zA-Z0-9]"))]
    pub state: String,
    /// Validation: `[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$"))]
    pub code: String,
    /// Validation: `[a-zA-Z0-9]`
    #[validate(regex(path = "RE_ALNUM", code = "[a-zA-Z0-9]"))]
    pub xsrf_token: String,
    /// Validation: `[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$"))]
    pub pkce_verifier: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate, ToSchema)]
pub struct ProviderLoginRequest {
    // values for the downstream client
    /// Validation: `email`
    #[validate(email)]
    pub email: Option<String>,
    /// Validation: `^[a-zA-Z0-9,.:/_\-&?=~#!$'()*+%]{2,128}$`
    #[validate(regex(
        path = "RE_CLIENT_ID_EPHEMERAL",
        code = "^[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]{2,128}$"
    ))]
    pub client_id: String,
    /// Validation: `[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$"))]
    pub redirect_uri: String,
    /// Validation: `Vec<^[a-z0-9-_/,:*]{2,64}$>`
    #[validate(custom(function = "validate_vec_scopes"))]
    pub scopes: Option<Vec<String>>,
    /// Validation: `[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$"))]
    pub state: Option<String>,
    /// Validation: `[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$"))]
    pub nonce: Option<String>,
    /// Validation: `[a-zA-Z0-9-._~]{43,128}`
    #[validate(regex(path = "RE_CODE_CHALLENGE", code = "[a-zA-Z0-9-._~]{43,128}"))]
    pub code_challenge: Option<String>,
    /// Validation: `[a-zA-Z0-9]`
    #[validate(regex(path = "RE_ALNUM", code = "[a-zA-Z0-9]"))]
    pub code_challenge_method: Option<String>,

    // values for the callback from upstream
    /// Validation: `[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub provider_id: String,
    /// Validation: `[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_-&?=~#!$'()*+%]+$"))]
    pub pkce_challenge: String,
}

#[derive(Debug, Deserialize, Validate, ToSchema)]
pub struct ProviderLookupRequest {
    /// Validation: `[a-zA-Z0-9,.:/_\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub issuer: Option<String>,
    /// Validation: `[a-zA-Z0-9,.:/_\-&?=~#!$'()*+%]`
    #[validate(regex(path = "RE_URI", code = "[a-zA-Z0-9,.:/_\\-&?=~#!$'()*+%]"))]
    pub metadata_url: Option<String>,
    pub danger_allow_insecure: Option<bool>,
    // no validation since it will throw an error later if not correctly formed
    pub root_pem: Option<String>,
}

#[derive(Debug, Clone, Serialize, ToSchema)]
pub struct ProviderResponse {
    pub id: String,
    pub name: String,
    pub typ: AuthProviderType,
    pub enabled: bool,

    pub issuer: String,
    pub authorization_endpoint: String,
    pub token_endpoint: String,
    pub userinfo_endpoint: String,

    pub client_id: String,
    pub client_secret: Option<String>,
    pub scope: String,

    pub admin_claim_path: Option<String>,
    pub admin_claim_value: Option<String>,
    pub mfa_claim_path: Option<String>,
    pub mfa_claim_value: Option<String>,

    pub danger_allow_insecure: bool,
    pub use_pkce: bool,

    pub root_pem: Option<String>,
}

#[derive(Debug, Clone, Serialize, ToSchema)]
pub struct ProviderLinkedUserResponse {
    pub id: String,
    pub email: String,
}

#[derive(Debug, Clone, Serialize, ToSchema)]
pub struct ProviderLookupResponse<'a> {
    pub issuer: String,
    pub authorization_endpoint: String,
    pub token_endpoint: String,
    pub userinfo_endpoint: String,
    pub scope: String,
    pub root_pem: &'a Option<String>,
    pub use_pkce: bool,
    pub danger_allow_insecure: bool,
}
