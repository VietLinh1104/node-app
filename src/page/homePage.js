import PathComponent from '../components/PathComponent'
import TableComponent from '../components/TableComponent';
import FormComponent from '../components/FormComponent';

function HomePage(){
    
    return(
        <div className='content-box'>
            <div >
                <h1 className='bot-margin'>The next gen<br/> of notes & docs</h1>
                <p>Simple. Powerful. Beautiful. Communicate more<br/>
                efficiently with Notion’s flexible building blocks.</p>
                <TableComponent></TableComponent>
            </div>
            
        </div>
    )
}

export default HomePage;