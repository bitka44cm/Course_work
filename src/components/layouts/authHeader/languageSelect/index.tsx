/** @jsxImportSource @emotion/react */
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';

import countries, { Country } from '../../../../constants/countries';
import styles from './styles';

function LanguageSelect() {
  const [language, setLanguage] = React.useState<string>(countries[1].lang);
  const handleChange = (e: SelectChangeEvent) => {
    setLanguage(e.target.value as string);
  };
  return (
    <Box css={styles.wrapperStyles}>
      <FormControl fullWidth>
        <InputLabel id="select-label">Language</InputLabel>
        <Select
          sx={{ maxHeight: '2.5rem' }}
          value={language}
          MenuProps={{ disableScrollLock: true }}
          id="lang-select"
          label="Language"
          onChange={handleChange}
          labelId="select-label">
          {countries.map((country: Country) => (
            <MenuItem key={country.code} value={country.lang}>
              <Box
                pr="4px"
                component="img"
                src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                alt={`Flag of ${country.label}`}
              />{' '}
              {country.lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default LanguageSelect;
