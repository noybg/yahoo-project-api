import React from 'react'

const MarketData = ({allData, closeDialogHandler}) => {

    const closeHandler = () => {
        closeDialogHandler();
    }
    console.log(allData);
    return (
        <div className='dialog-market'>
            <div className='dialog-market-outline' onClick={closeHandler}></div>
            <div className='dialog-market-inline'>
                <div onClick={closeHandler} className="exit-btn">x</div>
                <ul>
                    <li>Exchange: {allData.exchange}</li>
                    <li>Exchange Data Delayed By: {allData.exchangeDataDelayedBy}</li>
                    <li>Exchange Timezone Name: {allData.exchangeTimezoneName}</li>
                    <li>Exchange Timezone Short Name: {allData.exchangeTimezoneShortName}</li>
                    <li>First Trade Date Milliseconds: {allData.firstTradeDateMilliseconds}</li>
                    <li>Full Exchange Name: {allData.fullExchangeName}</li>
                    <li>GMT Off Set Milliseconds: {allData.gmtOffSetMilliseconds}</li>
                    <li>Language: {allData.language}</li>
                    <li>Market: {allData.market}</li>
                    <li>Market State: {allData.marketState}</li>
                    <li>Price Hint: {allData.priceHint}</li>
                    <li>Quote Source Name: {allData.quoteSourceName}</li>
                    <li>Quote Type: {allData.quoteType}</li>
                    <li>Region: {allData.region}</li>
                    <li>Regular Market Change:
                        <ul className="ul-inside-li">
                            <li>fmt: {allData.regularMarketChange.fmt}</li>
                            <li>raw: {allData.regularMarketChange.raw}</li>
                        </ul>
                    </li>
                    <li>Regular Market Change Percent:
                        <ul className="ul-inside-li">
                            <li>fmt: {allData.regularMarketChangePercent.fmt}</li>
                            <li>raw: {allData.regularMarketChangePercent.raw}</li>
                        </ul>
                    </li>
                    <li>Regular Market Previous Close:
                        <ul className="ul-inside-li">
                            <li>fmt: {allData.regularMarketPreviousClose.fmt}</li>
                            <li>raw: {allData.regularMarketPreviousClose.raw}</li>
                        </ul>
                    </li>
                    <li>Regular Market Price:
                        <ul className="ul-inside-li">
                            <li>fmt: {allData.regularMarketPrice.fmt}</li>
                            <li>raw: {allData.regularMarketPrice.raw}</li>
                        </ul>
                    </li>
                    <li>Regular Market Time:
                        <ul className="ul-inside-li">
                            <li>fmt: {allData.regularMarketTime.fmt}</li>
                            <li>raw: {allData.regularMarketTime.raw}</li>
                        </ul>
                    </li>
                    <li>Short Name: {allData.shortName}</li>
                    <li>Source Interval: {allData.sourceInterval}</li>
                    <li>Symbol: {allData.symbol}</li>
                    <li>Tradeable: {allData.tradeable}</li>
                    <li>Triggerable: {allData.triggerable}</li>


                    {/* {allData.exchange && <li>Exchange: {allData.exchange}</li>}
                    {allData.exchangeDataDelayedBy && <li>Exchange Data Delayed By: {allData.exchangeDataDelayedBy}</li>}
                    {allData.exchangeTimezoneName && <li>Exchange Timezone Name: {allData.exchangeTimezoneName}</li>}
                    {allData.exchangeTimezoneShortName && <li>Exchange Timezone Short Name: {allData.exchangeTimezoneShortName}</li>}
                    {allData.firstTradeDateMilliseconds && <li>First Trade Date Milliseconds: {allData.firstTradeDateMilliseconds}</li>}
                    {allData.fullExchangeName && <li>Full Exchange Name: {allData.fullExchangeName}</li>}
                    {allData.gmtOffSetMilliseconds && <li>GMT Off Set Milliseconds: {allData.gmtOffSetMilliseconds}</li>}
                    {allData.language && <li>Language: {allData.language}</li>}
                    {allData.market && <li>Market: {allData.market}</li>} */}
                </ul>
            </div>
        </div>
    )
}

export default MarketData
