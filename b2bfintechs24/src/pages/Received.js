import React from 'react';
import { Typography, Container, Stack } from '@mui/material';
import PageContainer from '../components/PageContainer';
import SimplePaper from '../components/SimplePaper';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Received = () => {
  // Filler data for the pie chart
  const data = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 },
  ];

  const COLORS = ['#67C587', '#A9DEBA', '#C9EAD4', '#EAF6ED'];

  return (
    <PageContainer>
      <Container maxWidth="lg">
        <Typography variant="h1" color="primary.dark" sx={{ my: 5 }}>
          Received
        </Typography>
        <Stack spacing={4} my={5}>
          <SimplePaper height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              isAnimationActive={false} // Disable animation
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          </SimplePaper>
          <SimplePaper height={500}>
          </SimplePaper>
        </Stack>
      </Container>
    </PageContainer>
  );
};

export default Received;
