import ListComponent from '../components/ListComponent'

function Sidebar(){
    let items = ["Content", "Infomation","List"]
    return(
        <div className ="App-sidebar sidebar">
            <ListComponent className='il-sidebar' items={items}/>
        </div>
    )
}

export default Sidebar;