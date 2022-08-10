import { Button, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import {ICheques, IPays, IPositions} from 'src/types'

interface ProductProps {
  cheques: ChequesTable[];
}

interface ChequesTable {
  dateReg: string,
  kioskName: string,
  chequeType:number,
  paysTatus: IPays[],
  pay: IPays[],
  sum: number,
  positions: IPositions[],
  positionsName: IPositions[]
}

const columns: ColumnsType<ChequesTable> = [
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
    dataIndex: 'paysTatus', 
    render: (_, { paysTatus, sum }) => (
      <>
        {paysTatus?.map(pays => {
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
    dataIndex: 'pay',
    render: (_, { pay, sum }) => (
      <>
        {pay?.map(pays => {
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
    dataIndex: 'positions',
    render: (_, { positions}) => (
      <>
        {positions?.map(positions => {
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
    dataIndex: 'positionsName',
    render: (_, { positionsName}) => (
      <>
        {positionsName?.map(positions => {
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
  const {cheques} = props
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


