import React, {useState} from 'react'
import MarketData from '../components/MarketData';

const MarketTable = ({allData, marketID, columnsList}) => {
    
    const [toggleDialog, setToggleDialog] = useState(false)

    const dialogHandler = () => {
        setToggleDialog( true )
    }
    
    const closeDialogHandler = () => {
        setToggleDialog( ! toggleDialog )
    }

    return (
        <>
            <tr>
                <td>{marketID}</td>
                {
                    columnsList.map(c => {
                        if( c === 'Language' ) return <td>{allData.language}</td>
                        if( c === 'Region' ) return <td>{allData.region}</td>
                        if( c === 'Exchange' ) return <td>{allData.exchange}</td>
                        if( c === 'Exchange Timezone Name' )  return <td>{allData.exchangeTimezoneName}</td>
                        if( c === 'Market' ) return <td>{allData.market}{toggleDialog && <MarketData
                              allData={allData}
                              closeDialogHandler={closeDialogHandler}
                              />}</td>
                        if( c === 'Actions' ) return <td><a className="btn-design bgc-g" onClick={dialogHandler}>Show Diablog</a></td>
                    })
                }
            </tr>
        </>
    )
}

export default MarketTable
