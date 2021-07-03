let nums = [1, 2, 3]
let mystery = nums
console.log(nums === mystery)
mystery.push(4, 5, 6, 7, 8, 9, 10)
console.log(nums)

const userInformation = {
  userName: `Maxie44`,
  notifications: [`Welcome!`],
}

userInformation.notifications.length <= 0
  ? 'No notifications'
  : userInformation.notifications[0] /* ? */
