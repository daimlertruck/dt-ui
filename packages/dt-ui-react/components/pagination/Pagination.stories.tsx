import { Story } from '@storybook/react';

import { usePagination } from './hooks';
import { Pagination, PaginationInput } from './Pagination';

export default {
  title: 'Data Display/Pagination',
  component: Pagination,
};

const Template: Story = ({ totalPages }) => {
  const { currentPage, handleChange, handleUserInput } = usePagination();

  return (
    <Pagination>
      <Pagination.PreviousItem
        disabled={currentPage <= 1 || currentPage > totalPages}
        onClick={() => handleChange(currentPage - 1)}
      />
      <PaginationInput
        onChange={handleChange}
        onHandleKeyDown={handleUserInput}
        totalPages={totalPages}
        value={currentPage}
      />
      <Pagination.Content
        onClick={() => handleChange(totalPages)}
        totalPages={totalPages}
      />
      <Pagination.NextItem
        disabled={currentPage >= totalPages || currentPage < 1}
        onClick={() => handleChange(currentPage + 1)}
      />
    </Pagination>
  );
};

export const Default = Template.bind({});

Default.args = {
  totalPages: 10,
};
