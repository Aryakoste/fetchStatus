import { tableColumnData, tableData } from "../../data";
import classes from './ShowScreen.module.css';

const ShowScreen = () => {
    return <>
        <div className={classes.mainContainer}>
            <div className={classes.idContainer}>
                <input type="text" placeholder="Enter Your Unique Id"></input>
                <button style={{
                    padding: '5px 20px',
                    backgroundColor: 'green',
                    color: 'white'
                }}>Get Status</button>
            </div>
            <table className={classes.mainTable}>
                <thead>
                    <tr>
                        {
                            tableColumnData.map(d => {
                                return <th key={d.id}>{d.name}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody className={classes.mainTableBody}>
                    {
                        tableData.length > 0 ? tableData.map(data => {
                            return <tr key={data.revfeedId}>
                                {
                                    tableColumnData.map(dat => {
                                        return <td key={dat.id}>
                                            {data[dat.id]}
                                        </td>
                                    })
                                }
                            </tr>
                        }): <tr>
                            <td colSpan={11} style={{
                                textAlign: 'center'
                            }}>No Data Available</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    </>
}

export default ShowScreen;