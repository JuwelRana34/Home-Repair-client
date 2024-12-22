import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from 'keep-react'
import { Select, SelectAction, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectValue } from 'keep-react'


function Service_To_Do() {
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
            <div className="w-[85px]">Special instruction </div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Service Taking Date </div>
          </TableHead>
          <TableHead>
            <div className="w-[90px]">Customar Name </div>
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
            <TableCell>
         
                <Select defaultValue="pending">
                  <SelectAction className="w-[7rem]">
                    <SelectValue placeholder="Select status" />
                  </SelectAction>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>select status</SelectLabel>
                      <SelectItem value="pending">pending </SelectItem>
                      <SelectItem value="working">working</SelectItem>
                      <SelectItem value="completed">completed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
           
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Service_To_Do