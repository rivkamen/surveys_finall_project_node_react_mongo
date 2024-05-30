export const items=[
    { label: 'דף הבית', icon: 'pi pi-home',template: itemRenderer,url:'/' },
    {
        label: 'יציאה',secondLabel:'התחברות',icon: 'pi pi-sign-out',
        secondIcon:'pi pi-sign-in',
        template: itemRenderer,
        url: '/logout',
        secondUrl:'/login',
    },
    // { label: 'התנתק', icon: 'pi pi-check-circle',command:()=>{navigate('/login')}},
    { label: 'סקרים למשתמשים', icon: 'pi pi-list',url:'UserSurveys',template: itemRenderer },
    { label: 'כל סקרים', icon: 'pi pi-inbox',template: itemRenderer,url:'/Surveys' },
    { label: 'סקרים לפילוח', icon: 'pi pi-inbox',template: itemRenderer,url:'/surveySegmentation' },
    { label: 'סקרים מפולחים', icon: 'pi pi-inbox',template: itemRenderer,url:'/surveySegmentation'},
    { label: '?מי אנחנו', icon: 'pi pi-inbox',template: itemRenderer,url:'/we'}
]