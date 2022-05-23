import os from "os";
export function typeVersion() {
  return `Привет, юзер. Вижу ты зашел с ${os.type()}`;
}
