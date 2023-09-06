import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Movies from './Movies/Movies';
import TicketPrices from './Prices/TicketPrices';
import Member from './Member/Member';


export default function NavBar({popularMovies}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>

      <TabContext value={value}>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} className='mt-10 font-bold bg-slate-200'>
            <Tab label="PHIM" value="1" />
            <Tab label="GIÁ VÉ" value="2" />
            <Tab label="THÀNH VIÊN" value="3" />
          </TabList>
        </Box>

        <TabPanel value="1"> <Movies popularMovies={popularMovies} /> </TabPanel>
        <TabPanel value="2" className='flex'> <TicketPrices /> </TabPanel>
        <TabPanel value="3"> <Member /> </TabPanel>

      </TabContext>
    </>
  );
}