import {type I18n} from "./interface.ts";

export const I18nDe: I18n = {
    common: {
        cancel: "Abbrechen",
        email: "E-Mail",
        errTooShort: "Eingabe zu kurz",
        errTooLong: "Eingabe zu lang",
        invalidInput: "Ungültige Eingaben",
        never: "Niemals",
        password: "Passwort",
        required: "Notwendig",
        save: "Speichern",
    },
    account: {
        account: "Benutzer Account",
        accType: "Account Typ",
        accTypePasskeyText1: "Dies ist ein \"Passkey-Only\" Account. Das bedeutet, dass\ndieser Account kein Passwort hat und auch keines benötigt.",
        accTypePasskeyText2: "Der Account kann in einen Passwort-Account umgewandelt\nwerden. Das würde allerdings bedeuten, dass ein Login auf einem neuen Gerät ohne vorherige, zumindest\neinmalige zusätzliche Verifizierung des Passwortes nicht mehr möglich sein wird.",
        accTypePasskeyText3: "Soll dieser Account gewandelt und ein Passwort hinzugefügt werden?",
        accessExp: "Zugang erlischt",
        accessRenew: "Zugang Erneuerung bis",
        accessRenewDelete: "Möglichkeit zur Erneuerung löschen",
        birthdate: "Geburtsdatum",
        city: "Stadt",
        changePassword: "Passwort wechseln",
        convertAccount: "Account Umwandeln",
        convertAccountP1: "Dieser Account kann in einen Passkey-Only Account umgewandelt\nwerden. Diese Umwandling löscht das Passwort und erlaubt den alleinigen Login mit den registrieren\nPasskeys. Nur Passkeys mit zusätzlicher Benutzerverifizierung werden akzeptiert. Diese sind auf der\n'MFA' Seite durch das zusätzliche Symbol hinter dem Passkey Namen gekennzeichnet.",
        country: "Land",
        deviceId: "ID",
        deviceName: "Name",
        devices: "Geräte",
        devicesDesc: "Mit diesem Account verknüpfte Geräte",
        emailUpdateConfirm: "Die E-Mail Adresse wurde noch nicht aktualisiert. Eine Nachricht\nmit einem Bestätigungslink wurde an die neue Adresse geschickt. Das Update muss über den\nenthaltenen Link bestätigt werden. Nach der Bestätigung wird die neue Adresse gesetzt.",
        emailVerified: "E-Mail verifiziert",
        familyName: "Nachname",
        federatedConvertPassword1: "Dies ist ein verknüpfter Account. Das bedeutet, dass\nder Login via externem Provider zur Authenzifizierung geschieht. Der derzeitige Provider ist:",
        federatedConvertPassword2: "Es kann ein Passwort Reset via E-Mail angefordert\nwerden. Das würde nach Abschluss diesem Account ein lokales Passwort hinzufügen. Danach wäre der\nLogin entweder per externem Provider oder lokalem Password möglich. Passwort Reset anfordern?",
        generateRandom: "Zufällig generiert",
        givenName: "Vorname",
        groups: "Gruppen",
        key: "Schlüssel",
        keyUnique: "Schlüssel muss einzigartig sein",
        lastLogin: "Letzter Login",
        mfaActivated: "MFA aktiviert",
        navInfo: "Info",
        navEdit: "Editieren",
        navMfa: "MFA",
        navLogout: "Logout",
        optionalValues: "Optionale Angaben",
        passwordConfirm: "Passwort bestätigen",
        passwordCurr: "Derzeitiges Passwort",
        passwordCurrReq: "Derzeitiges Passwort ist notwendig",
        passwordNew: "Neues Passwort",
        passwordNewReq: "Neues Passwort ist notwendig",
        passwordNoMatch: "Passwörter stimmen nicht überein",
        passwordExpiry: "Passwort Ablauf",
        passwordPolicyFollow: "Befolgen Sie die Passwort Regeln",
        passwordReset: "Passwort Reset",
        phone: "Telefon",
        providerLink: "Account Verbinden",
        providerLinkDesc: "Dieser Account kann mit einem der folgenden Login Provider\nverbunden werden. Nach der Aktivierung des Prozesses wird eine Weiterleitung auf die Login Seite\ndes gewählten Providers ausgelöst. Nach erfolgreichem Login und bei Übereinstimmung der E-Mail\nAdressen wird dieser Account verknüpft.",
        providerUnlink: "Verbindung Trennen",
        providerUnlinkDesc: "Nur wenn mindestens ein Passwort oder ein Passkey für diesen\nAccount gesetzt ist, kann die Verbindung zum Provider gelöst werden.",
        regDate: "Datum der Registrierung",
        regIp: "Registrierung von IP",
        roles: "Rollen",
        street: "Straße",
        user: "Benutzer",
        userCreated: "Benutzer erstellt",
        userEnabled: "Benutzer Aktiviert",
        userExpiry: "Benutzer Ablauf",
        userVerifiedTooltip: "Abgesichert durch Fingerabdruck oder PIN",
        validEmail: "Gültige E-Mail Adresse",
        validGivenName: "Vorname, 1 - 32 Buchstaben, keine Sonderzeichen",
        validFamilyName: "Nachname, 1 - 32  Buchstaben, keine Sonderzeichen",
        webIdDesc: "Hier können Sie die Felder festlegen, die über Ihre WebID veröffentlicht\nwerden. Dies ist ein Feature, was von manchen Netzwerken für dezentrale Logins genutzt wird.\nSollten Sie nicht wissen, was die WebID ist, brauchen Sie sie höchstwahrscheinlich nicht.",
        webIdDescData: "Sie können eigene Daten zu Ihrer WebID in gültigem FOAF Vokabular\nhinzufügen:",
        webIdExpertMode: "Expertenmodus aktivieren",
        zip: "PLZ"
    },
    authorize: {
        clientForceMfa: "Dieser Login setzt MFA voraus für eine erhöhte Sicherheit.\nUm Zugang zu bekommen, müssen Sie sie in Ihren Account einloggen und mindestens einen Passkey\nhinzufügen.",
        email: "E-Mail",
        emailBadFormat: "Inkorrektes E-Mail Format",
        emailRequired: "E-Mail ist notwendig",
        emailSentMsg: "Sollte Ihre Adresse registriert sein, wurde eine Nachricht versandt",
        http429: "Zu viele ungültige Versuche. Gesperrt bis:",
        invalidCredentials: "Ungültige Zugangsdaten",
        invalidKeyUsed: "Ungültiger Sicherheitsschlüssel",
        login: "Login",
        mfaAck: "Bestätigt",
        password: "Password",
        passwordForgotten: "Password vergessen?",
        passwordRequest: "Anfordern",
        passwordRequired: "Password ist notwendig",
        provideMfa: "Bitte stellen Sie Ihr MFA Gerät zur Verfügung",
        requestExpires: "Anfrage läuft ab",
        signUp: "Benutzer Registrierung"
    },
    device: {
        accept: "Akzeptieren",
        autoRedirectAccount: "Automatische Weiterleitung zum Account folgt",
        closeWindow: "Dieses Fenster kann nun geschlossen werden.",
        decline: "Ablehnen",
        desc: "Bitte den {{count}}-stelligen vom Geräte angezeigten Benutzer Code eingeben.",
        descScopes: "Das Gerät fragt Zugang an zu:",
        isAccepted: "Die Anfrage wurde akzeptiert",
        isDeclined: "Die Anfrage wurde abgewiesen",
        submit: "Absenden",
        title: "Gerät Authorisierung",
        userCode: "Benutzer Code",
        wrongOrExpired: "Ungültiger oder abgelaufener Code"
    },
    emailChange: {
        title: "E-Mail Wechsel bestätigt",
        textChanged: "Ihre E-Mail Adresse wurde erfolgreich geändert von",
        textLogin: "Sie können sich jetzt mit der neuen Adresse einloggen.",
        to: "zu",
    },
    error: {
        // errorText: "Die angeforderte Seite konnte nicht gefunden werden.",
        details: "Details Anzeigen",
        // detailsText: undefined,
    },
    index: {
        register: "Registrieren",
        accountLogin: "Account",
        adminLogin: "Admin",
    },
    logout: {
        logout: "Logout",
        confirmMsg: "Sind Sie sicher, dass Sie sich ausloggen und die Session beenden möchten?",
        cancel: "Abbrechen"
    },
    mfa: {
        p1: "Wenn Sie mehrere Systeme parallel nutzen möchten, wie z.B. Windows und Android, sollten Sie die Registrierung mit Android durchführen.",
        p2: "Android ist diejenige Plattform, die derzeit die wenigsten Features der passwortlosen Technologie unterstützt. Schlüssel, die dort registriert werden, funktionieren auf anderen Geräten gleichermaßen. Dies gilt jedoch nicht andersherum.",
        delete: "Löschen",
        errorReg: "Fehler beim Starten der Registrierung",
        invalidKeyUsed: "Ungültiger Sicherheitsschlüssel benutzt",
        lastUsed: "Zuletzt genutzt",
        noKey: "Es wurde in diesem Speicher noch kein Sicherheitsschlüssel registriert",
        register: "Registrieren",
        registerNew: "Neuen Key Registrieren",
        registerd: "Registriert",
        registerdKeys: "Registrierte Keys",
        passkeyName: "Passkey Name",
        passkeyNameErr: "2 - 32 Buchstaben, keine Sonderzeichen",
        test: "Test",
        testError: "Fehler beim Starten des Tests",
        testSuccess: "Test erfolgreich"
    },
    passwordPolicy: {
        passwordPolicy: "Passwort Regeln",
        lengthMin: "Länge min",
        lengthMax: "Länge max",
        lowercaseMin: "Kleinbuchstaben min",
        uppercaseMin: "Großbuchstaben min",
        digitsMin: "Ziffern min",
        specialMin: "Spezielle Buchstaben min",
        notRecent: "Keins der letzten Passwörter"
    },
    passwordReset: {
        accountLogin: "Account Login",
        badFormat: "Ungültiges Format",
        fidoLink: "https://fidoalliance.org/fido2",
        generate: "Generieren",
        newAccDesc1: "Sie haben die Option zwischen zwei Account Typen zu wählen: Passwortlos oder\ntraditionalles Passwort.",
        newAccDesc2: "Der passwortlose Account Typ ist immer zu bevorzugen. Er bietet einen\nsehr viel höheren Sicherheitsstandard als traditionelle Passwörter und gleichzeitig einen einfacheren\nund schnelleren Login.\nDazu wird mindestens ein Passkey (Yubikey, Apple Touch ID, Windows Hello, ...) benötigt, welcher dem\nFIDO2 Standard gerecht wird. Für weitere Informationen können Sie diesem Link folgen: ",
        newAccount: "Neuer Account",
        passwordReset: "Passwort Zurücksetzen",
        password: "Passwort",
        passwordless: "FIDO Passkey",
        passwordConfirm: "Passwort bestätigen",
        passwordNoMatch: "Passwörter stimmen nicht überein",
        required: "Notwendig",
        save: "Speichern",
        success1: "Das Passwort wurde erfolgreich zurückgesetzt.",
        success2: "Sie werden in Kürze weitergeleitet.",
        success3: "Sollte Sie nicht weitergeleitet werden, klicken Sie bitte hier:",
        successPasskey1: "Der neue Passkey wurde erfolgreich registriert.",
        successPasskey2: "Bitte loggen Sie sich direkt in Ihren Account ein und registrieren\nSie mindestens einen weiteren Backup Passkey. Ein passwortloser Account kann nicht den Passwort\nReset via E-Mail nutzen für den Fall, dass der derzeitige Passkey abhanden kommt."
    },
    register: {
        domainAllowed: "Erlaubte Domain:",
        domainErr: "E-Mail Domain ist nicht erlaubt",
        domainRestricted: "E-Mail Domains sind beschränkt",
        email: "E-Mail",
        emailBadFormat: "Ungültiges E-Mail Format",
        emailCheck: "Bitte prüfen Sie Ihren E-Mail Posteingang",
        regexName: "Name mit 2 - 32 Buchstaben ohne Sonderzeichen",
        register: "Registrieren",
        success: "Registrierung erfolgreich",
        userReg: "Benutzer Registrierung"
    }
};