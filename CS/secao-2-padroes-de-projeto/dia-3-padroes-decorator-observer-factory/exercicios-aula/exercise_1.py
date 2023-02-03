"""
ROSA = "\033[95m"
ROXO = "\033[94m"
AZUL = "\033[96m"
VERDE = "\033[92m"
LARANJA = "\033[93m"
VERMELHO = "\033[91m"
NEGRITO = "\033[1m"
SUBLINHADO = "\033[4m"
RESET = "\033[0m"

print("\033[94mOlá Mundo!\033[0m")
# ou
print(f"{ROXO}Olá Mundo!{RESET}")
"""


from abc import ABC


class Log:
    def dispara_log(self, message):
        return message


class LogDecoratorInterface(ABC):
    def __init__(self, log):
        self._log = log
        self._log_type = {
            "error": "\033[91m",
            "warning": "\033[93m",
            "success": "\033[92m",
        }
        self._reset = "\033[0m"

    def dispara_log(self, message):
        raise NotImplementedError


class LogError(LogDecoratorInterface):
    def dispara_log(self, message):
        log_message = f"{self._log_type['error']}Erro{self._reset}: {message}"
        return self._log.dispara_log(log_message)


class LogWarning(LogDecoratorInterface):
    def dispara_log(self, message):
        log_message = f"{self._log_type['warning']}Warning{self._reset}: {message}"
        return self._log.dispara_log(log_message)


class LogSuccess(LogDecoratorInterface):
    def dispara_log(self, message):
        log_message = f"{self._log_type['success']}Success{self._reset}: {message}"
        test = self._log.dispara_log(log_message)
        return test


log = Log()
print(LogSuccess(log).dispara_log("Sistema em funcionamento!"))
print(LogWarning(Log()).dispara_log("Sistema lento!"))
print(LogError(Log()).dispara_log("Sistema com erros!"))
