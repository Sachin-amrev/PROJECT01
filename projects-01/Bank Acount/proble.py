class BankAccount:
    def __init__(self, initial_balance):
        self.balance = initial_balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited ₹{amount}. New balance: ₹{self.balance}")

    def withdraw(self, amount):
        self.balance -= amount
        print(f"Withdrew ₹{amount}. New balance: ₹{self.balance}")

# Create a BankAccount with initial balance of ₹500
account = BankAccount(500)

# Perform operations
account.deposit(200)    # Deposits ₹200
account.withdraw(150)   # Withdraws ₹150
