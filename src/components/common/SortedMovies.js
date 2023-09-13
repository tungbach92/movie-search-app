import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SortedMovies() {
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Box sx={{ maxWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> Sắp xếp </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem
                        value={10}
                        onClick={''}
                    >
                        Mới nhất
                    </MenuItem>

                    <MenuItem
                        value={20}
                        onClick={''}
                    >
                        Đánh giá
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default SortedMovies