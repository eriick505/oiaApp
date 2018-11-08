export const messageErroCodeLogin = (erroCode) => {
    switch (erroCode) {
        case "auth/wrong-password":
            return "Senha Incorreta";
        case "auth/invalid-email":
            return "Email Inválido";
        case "auth/user-disabled":
            return "Email Informado Desativado";
        case "auth/user-not-found":
            return "Usuário não encontrado";
        default:
            return "Erro 404. Favor informar ao suporte";
    }
}
export const messageErroCodeNewUser = (erroCode) => {
    switch (erroCode) {
        case "auth/wrong-password":
            return "Senha Incorreta";
        case "auth/invalid-email":
            return "Email Inválido";
        case "auth/user-disabled":
            return "Email Informado Desativado";
        case "auth/user-not-found":
            return "Usuário não encontrado";
        case "auth/email-already-in-use":
            return "Email já cadastrado";
        case "auth/invalid-email":
            return "Email Inválido"
        case "auth/operation-not-allowed":
            return "Operação não permitida";
        case "auth/weak-password":
            return "Senha fraca, informe uma senha com no mínimo 6 caracteres";
        default:
            return "Erro 404. Favor informar ao suporte";
    }
}