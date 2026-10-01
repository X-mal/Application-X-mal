import { beforeEach, describe, expect, it, jest } from "@jest/globals";

const mockFindByEmail = jest.fn();
const mockComparePassword = jest.fn();
const mockGenerateToken = jest.fn(() => "token-fake");

jest.unstable_mockModule("../../../src/shared/users/repository/user.repository.js", () => ({
    findByEmail: mockFindByEmail,
}));

jest.unstable_mockModule("../../../src/core/security/password.service.js", () => ({
    comparePassword: mockComparePassword,
}));

jest.unstable_mockModule("../../../src/core/security/jwt.service.js", () => ({
    generateToken: mockGenerateToken,
}));

const { default: signIn } = await import("../../../src/features/signin/signinuser.service.js");

describe("signIn", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("deve autenticar corretamente", async () => {
        mockFindByEmail.mockResolvedValue({
            ra: "1",
            username: "joao",
            email: "joao@email.com",
            pass: "hash-da-senha",
            curso: "MECATRONICA",
            instituto: "faculdade",
            turno: "matutino"
        });

        mockComparePassword.mockResolvedValue(true);

        const result = await signIn("joao@email.com", "123456");

        expect(mockFindByEmail).toHaveBeenCalledWith("joao@email.com");
        expect(mockComparePassword).toHaveBeenCalledWith("123456", "hash-da-senha");
        expect(mockGenerateToken).toHaveBeenCalledWith({
            ra: "1",
            username: "joao",
            email: "joao@email.com",
            pass: "hash-da-senha",
            curso: "MECATRONICA",
            instituto: "faculdade",
            turno: "matutino"
        });

        expect(result).toEqual({
            token: "token-fake",
            user: {
                ra: "1",
                username: "joao",
                email: "joao@email.com",
                pass: "hash-da-senha",
                curso: "MECATRONICA",
                instituto: "faculdade",
                turno: "matutino"
            }
        });
    });

    it("deve lançar erro quando o email não existir", async () => {
        mockFindByEmail.mockResolvedValue(null);

        await expect(signIn("naoexiste@email.com", "123456")).rejects.toMatchObject({
            statusCode: 404,
            "message":"Email não está associado a uma conta"
        });
    });

    it("deve lançar erro quando a senha estiver incorreta", async () => {
        mockFindByEmail.mockResolvedValue({
            ra: "1",
            username: "joao",
            email: "joao@email.com",
            pass: "hash-da-senha",
            curso: "MECATRONICA",
            instituto: "faculdade",
            turno: "matutino"
        });

        mockComparePassword.mockResolvedValue(false);

        await expect(signIn("joao@email.com", "senha-errada")).rejects.toMatchObject({
            statusCode: 409,
            "message":"Senha incorreta"
        });
    });
});