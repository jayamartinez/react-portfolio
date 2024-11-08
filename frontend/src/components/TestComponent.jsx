// frontend/src/components/TestComponent.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient.js';

const TestComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('blog_posts') // Replace with any table you created, e.g., 'projects' or 'skills'
        .select('*');

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        console.log('Fetched data:', data);
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data from Supabase:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestComponent;
