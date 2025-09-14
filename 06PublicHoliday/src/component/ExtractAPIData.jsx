import axios from 'axios'

const api=axios.create({
    baseURL:"https://openholidaysapi.org",
})

export const fetchCountries=async()=>{
    const res=await api.get('/Countries');
    return res.data;
}

export const fetchHoliday = async (country) => {
  const year = new Date().getFullYear();

   const res = await api.get(
    `/PublicHolidays?countryIsoCode=${country}&languageIsoCode=en&validFrom=${year}-01-01&validTo=${year}-12-31`
  );

  return res.data;
};


 