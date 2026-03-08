function createBankAccount() {
  let balance = 0;            // private
  let history = [];           // private

  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Invalid deposit amount";
      }
      balance += amount;
      history.push(`Deposited: ${amount}`);
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        return "Invalid withdraw amount";
      }
      if (amount > balance) {
        return "Insufficient balance";
      }
      balance -= amount;
      history.push(`Withdrawn: ${amount}`);
      return balance;
    },

    getBalance() {
      return balance;
    },

    getTransactionHistory() {
      return [...history];
    }
  };
}