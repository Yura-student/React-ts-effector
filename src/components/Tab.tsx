import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';

interface DataType {
  key: React.Key;
  dateReg: string;
  kioskName: string;
  chequeType: boolean;
  pays: Object;
  psum: Object;
  sum: string;
  chequeState: number;
  positions: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Дата покупки',
    dataIndex: 'dateReg',
  },
  {
    title: 'Киоск',
    dataIndex: 'kioskName',
  },
  {
    title: 'Тип',
    dataIndex: 'chequeType',
  },
  {
    title: 'Статус оплаты',
    dataIndex: 'pays[].sum',
  },
  {
    title: 'Оплата',
    dataIndex: 'pays[].sum',
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
  },
  {
    title: 'Кол-во товара',
    dataIndex: 'chequeState',
  },
  {
    title: 'Товары',
    dataIndex: 'positions[].name',
  },
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    dateReg: 'дата',
    kioskName: `Киоск`,
    chequeType: false ,
    pays:[],
    psum: [],
    sum: 20.2+' р',
    chequeState: 20,
    positions: 'капуста',
  });
}

export function Tab() {
  
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return(
    <div>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}


