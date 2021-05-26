
type ValidProps = (
    rule: Record<string, unknown>,
    value: string,
) => Promise<void>;

export const validPassword: ValidProps = (rule, value) => {
    if (value) {
        // const reg = //
        return Promise.resolve();
    } else {
        return Promise.reject(new Error("请输入密码"))
    }
}