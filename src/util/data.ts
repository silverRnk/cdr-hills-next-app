
class Utils {

    static generateNumber(){
        return [1, 2, 3, 4, 5].map((_) => Math.floor(Math.random() * 100000))
    }
}

export const weeklyIncome = Utils.generateNumber()
export const weeklyExpenses = Utils.generateNumber()

export const dashboardMockData = {
    students: 10000,
    teacher: 500,
    parents: 20000,
    earning: 100000
}