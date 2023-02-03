from abc import ABC, abstractmethod


class SysInterface(ABC):
    @abstractmethod
    def __repr__(self):
        raise NotImplementedError


class Suport(SysInterface):
    def __repr__(self):
        return "Suporte"


class Seller(SysInterface):
    def __repr__(self):
        return "Vendas"


class Finance(SysInterface):
    def __repr__(self):
        return "Financeiro"


class Account(ABC):
    def __init__(self):
        self.access = []
        self.create_account()

    @abstractmethod
    def create_account(self):
        raise NotImplementedError

    def add_privilege(self, privilege):
        self.access.append(privilege)

    def show_privileges(self):
        return self.access


class SuportAccount(Account):
    def create_account(self):
        self.add_privilege(Suport())


class SuportSellerAccount(Account):
    def create_account(self):
        self.add_privilege(Suport())
        self.add_privilege(Seller())


class ManagerAccount(Account):
    def create_account(self):
        self.add_privilege(Suport())
        self.add_privilege(Seller())
        self.add_privilege(Finance())


account_create = input(
    "Selecione a conta que quer criar: [SuportAccount, SuportSellerAccount, ManagerAccount]"
)

account: Account = eval(account_create)()

print(
    f"Conta {account_create} criada com os seguintes privilégios: {account.show_privileges()} "
)
