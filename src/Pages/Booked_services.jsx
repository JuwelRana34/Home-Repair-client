import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'


function Booked_services() {
  const tableData = [
    {
      id: 1,
      fileName: 'Landscape-Beach.png',
      fileFormat: 'Png',
      ratio: '16:9',
      resolution: '1920x1080',
      fileSize: '43 KB',
      status: 'In Progress',
    },
    {
      id: 2,
      fileName: 'Portrait-Sunset.jpg',
      fileFormat: 'Jpg',
      ratio: '4:3',
      resolution: '1024x768',
      fileSize: '128 KB',
      status: 'Complete',
    },
    {
      id: 3,
      fileName: 'Cityscape-Night.png',
      fileFormat: 'Png',
      ratio: '16:9',
      resolution: '3840x2160',
      fileSize: '210 KB',
      status: 'Pending',
    },
    {
      id: 4,
      fileName: 'Animation-Loading.gif',
      fileFormat: 'Gif',
      ratio: '1:1',
      resolution: '800x800',
      fileSize: '76 KB',
      status: 'In Progress',
    },
    {
      id: 5,
      fileName: 'Mountain-Peak.jpg',
      fileFormat: 'Jpg',
      ratio: '16:9',
      resolution: '2560x1440',
      fileSize: '312 KB',
      status: 'Complete',
    },
  ]
  return (
    <Table>
    <TableHeader>
      <TableRow>
        <TableHead>
          <div className="max-w-[250px]">service photo </div>
        </TableHead>
        <TableHead>
          <div className="w-[80px]">service name</div>
        </TableHead>
        <TableHead>
          <div className="w-[85px]">Price</div>
        </TableHead>
        <TableHead>
          <div className="w-[90px]">Service Taking Date </div>
        </TableHead>
        <TableHead>
          <div className="w-[90px]">Provider Name</div>
        </TableHead>
        <TableHead>
          <div className="w-[80px]">Status</div>
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {tableData.map((item) => (
        <TableRow key={item.id}>
          <TableCell>
            <div className="max-w-[250px] truncate">{item.fileName}</div>
          </TableCell>
          <TableCell>{item.fileFormat}</TableCell>
          <TableCell>{item.ratio}</TableCell>
          <TableCell>{item.resolution}</TableCell>
          <TableCell>{item.fileSize}</TableCell>
          <TableCell>{item.status}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  )
}

export default Booked_services