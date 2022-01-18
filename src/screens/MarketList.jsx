import React, {useState, useEffect} from 'react'
import PageHeader from '../components/PageHeader';
import MarketTable from '../components/MarketTable';
import { Redirect } from 'react-router-dom'

const MarketList = () => {

    const [lang, setLang] = useState('en');
    const [ragion, setRagion] = useState('US');
    const [marketList, setMarketList] = useState([]);
    const [columns, setColumns] = useState([
        'Language',
        'Region',
        'Exchange',
        'Exchange Timezone Name',
        'Market',
        'Actions',
    ]);
    const [newColumns, setNewColumns] = useState([])
    


    const regionHandler = (e) => {
        setRagion(e.target.value)
    }
    const langHandler = (e) => {
        setLang(e.target.value)
    }

    const filterColumnHandler = (e) => {
        let newCol = [...newColumns];
        newCol.push(e.target.value)
        let removeDup = new Set(newCol);
        let unique = Array.from(removeDup);
        setNewColumns(unique);

    }

    const refreshHandler = () => {
        window.location = '/';
    }

    const saveNewColumns = () => {
        if( newColumns.length >= 1 ) {
            setColumns(newColumns);
        }
    }
    const resetNewColumns = () => {
        setNewColumns([]);
    }

    useEffect(() => {

        fetch(`https://yfapi.net/v6/finance/quote/marketSummary?lang=${lang}&region=${ragion}`, {
            method: 'Get', 
            headers: {
                'X-API-KEY': '9ToYdJcBJS8mb3uOGGCNw5q7OBoRG1lCsAuwh706',
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            
            if ( data.message !== 'Limit Exceeded') {
                const items = data.marketSummaryResponse.result;
                setMarketList([...items])
            }
        } )
        .catch(error => console.error(error));
    }, [lang , ragion] );
    
    if( ! localStorage.getItem('token') ) return <Redirect to="/"/>

    return (

        <div className="market-list">
            
            <PageHeader>Market List Page</PageHeader>

            <div className="reset-wrapper">
                <button className="btn-design" onClick={refreshHandler}>Reset Table</button>
                <button className="btn-design" onClick={resetNewColumns}>Reset Filters Options</button>

            </div>
            
            <div className="selectors">

                <div className="selector">
                <label>Choose lang:</label>
                <select name="" onChange={langHandler} id="">
                    <option value="en">en</option>
                    <option value="fr">fr</option>
                    <option value="de">de</option>
                    <option value="it">it</option>
                    <option value="es">es</option>
                    <option value="zh">zh</option>
                </select>
                </div>
                
                <div className="selector">
                <label>Choose ragion:</label> 
                <select name="" onChange={regionHandler} id="">
                    <option value="US">US</option>
                    <option value="AU">AU</option>
                    <option value="CA">CA</option>
                    <option value="FR">FR</option>
                    <option value="DE">DE</option>
                    <option value="HK">HK</option>
                    <option value="IT">IT</option>
                    <option value="ES">ES</option>
                    <option value="GB">GB</option>
                    <option value="IN">IN</option>
                </select>
                </div>

                <div className="selector">
                    {
                    newColumns.length > 0 && 
                    <ul className='show-selected-cols'>
                        {newColumns.map( (col,i) => <li key={i}>{col}</li>)}
                    </ul>
                    }
                    <label>Choose Column:</label> 

                    <select  onChange={filterColumnHandler} >
                        {
                            columns.map( (c,i) => <option key={i} value={c}>{c}</option> )
                        }
                    </select>
                    <button className="btn-design" onClick={saveNewColumns}>Filter Columns</button>
                </div>
            </div>

            <div className="contain-table">
            <table className="customers">
                <thead>
                        <tr>
                        <th>#</th>
                        {
                            columns.map( (c,i) => 
                            <th key={i}>{c}</th>
                            )
                        }
                        </tr>
                </thead>
                <tbody>
                {
                    marketList.map( (m, i) => (
                        <MarketTable
                            key={i}
                            marketID={i+1}
                            allData={m}
                            columnsList={columns}
                        />
                    ) )
                } 
                </tbody>
                
                
            </table>
            </div>


        </div>
    )
}

export default MarketList
