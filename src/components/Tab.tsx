import { Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import React, { useState } from 'react';
import { cheques } from 'src/data/cheques';
import {ICheques} from 'src/types'

interface ProductProps {
  cheques: ICheques;
}

const columns: ColumnsType<ICheques> = [
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
    dataIndex: 'pays', 
    render: (_, { pays, sum }) => (
      <>
        {pays.map(pays => {
          let payStatus = '';
          if (pays.sum === sum) {
            payStatus = 'Оплачено';
          } 
          else if (pays.sum === 0) {
            payStatus = 'Нет оплаты';
          }     
          else if (pays.sum < sum) {
            payStatus = 'Недоплата';
          }       
          return (
          <div>
            {payStatus}
          </div>);
        }
        )}
      </>
    ),
  },
  {
    title: 'Оплата',
    dataIndex: 'pays.sum',
    render: (_, { pays, sum }) => (
      <>
        {pays.map(pays => {
          return (
          <div>
            {pays.sum}
          </div>);
        }
        )}
      </>
    ),    
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
  },
  {
    title: 'Кол-во товара',
    dataIndex: 'positions.quantity',
    render: (_, { positions}) => (
      <>
        {positions.map(positions => {
          return (
          <div>
            {positions.quantity}
          </div>);
        }
        )}
      </>
    ),  
  },
  {
    title: 'Товары',
    dataIndex: 'positions.name',
    render: (_, { positions}) => (
      <>
        {positions.map(positions => {
          return (
          <div>
            {positions.name}
          </div>);
        }
        )}
      </>
    ), 
  },
];



export function Tab(props: ProductProps) {
  
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={cheques} />
    </div>
  );
}


