export const tableColumnData = [
    {
        id: 'revfeedId',
        name: 'Rev Feed Id'
    }, 
    {
        id: 'mainId',
        name: 'Main Id'
    }, 
    {
        id: 'ckycStatus', 
        name: 'CKYC Status'
    }, 
    {
        id: 'sendStatusFlag',
        name: 'Send Status Flag'
    }, 
    {
        id: 'insertDate',
        name: 'Insert Date'
    }, 
    {
        id: 'modifiedTimestamp',
        name: 'Modified Timestamp'
    }, 
    {
        id: 'ckycId',
        name: 'CKYC Id'
    },
    {
        id: 'sourceSysCustCode',
        name: 'Source System Custom Code'
    }, 
    {
        id: 'insertedBy',
        name: 'Inserted By'
    }, 
    {
        id: 'sentStatusCount',
        name: 'Sent Status Count'
    },
    {
        id: 'remarks',
        name: 'Remarks'
    }
];

export const tableData = [
    {
        revfeedId: 1,
        mainId: 'M123',
        ckycStatus: 'Verified',
        sendStatusFlag: true,
        insertDate: '2024-03-27',
        modifiedTimestamp: '2024-03-28T08:30:00',
        ckycId: 'CKYC001',
        sourceSysCustCode: 'KY224004887261',
        insertedBy: 'Admin',
        sentStatusCount: 3,
        remarks: 'Data verified'
    },
    {
        revfeedId: 2,
        mainId: 'M124',
        ckycStatus: 'Pending',
        sendStatusFlag: false,
        insertDate: '2024-03-26',
        modifiedTimestamp: '2024-03-28T09:45:00',
        ckycId: 'CKYC002',
        sourceSysCustCode: 'KY224004887262',
        insertedBy: 'User',
        sentStatusCount: 0,
        remarks: 'Waiting for verification'
    }
]