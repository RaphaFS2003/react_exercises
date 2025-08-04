import React from 'react';

interface ListItemProps {
  index: number;
  name: string;
}

const ListItem: React.FC<ListItemProps> = ({ index, name }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-md border border-blue-200 hover:shadow-md transition-shadow duration-200">
      <span className="flex items-center space-x-3">
        <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full text-sm font-semibold">
          {index}
        </span>
        <span className="text-gray-800 font-medium">
          {name}
        </span>
      </span>
      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
        Item #{index + 1}
      </span>
    </li>
  );
};

export default ListItem;
