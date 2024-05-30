import { TabMenu } from "primereact/tabmenu";
import { useGetUserQuery } from "./usersApiSlice"

const UsersNavBar=(props)=>{
    
        const items = [
            { label: 'home', icon: 'pi pi-home',url:'/' },
            { label: 'login', icon: 'pi pi-check-circle',url:'/login'},
            { label: 'userSurveys', icon: 'pi pi-list',url:'/UserSurveys'},
            { label: 'segmented', icon: 'pi pi-inbox',url:'/segments' }
        ];
    
        return (
            
            <div className="card" style={{position:"fixed"}}>
                <TabMenu model={items} />
            </div>
        )
}
export default UsersNavBar