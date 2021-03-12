from atm_card import ATMcard


class Customer:

    def __init__(self, id, cusPin=1234, cusBalance=10000):
        self.id = id
        self.pin = cusPin
        self.balance = cusBalance

    def checkId(self):
        return self.id

    def checkPin(self):
        return self.pin

    def checkBalance(self):
        return self.balance

    def withDrawBalance(self, nominal):
        self.balance -= nominal

    def depositBalance(self, nominal):
        self.balance += nominal
