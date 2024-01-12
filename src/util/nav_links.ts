
const adminBaseURL = '/admin'

export const adminSideNavBarLinks = {
    dashboard: adminBaseURL + '/dashboard',
    students: {
        list: adminBaseURL + '/students/list',
        add_student: adminBaseURL + '/students/add_student'
    },
    teacher: {
        list: adminBaseURL + '/teachers/list',
        add_teacher: adminBaseURL + '/teachers/add_teacher'

    }
}