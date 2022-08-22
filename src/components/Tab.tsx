import React from 'react';
import { Button, Modal, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IPays, IPositions } from 'src/types'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { deleteCheques } from 'src/API/cheques';
import Mod from './Modal';
import { $SelectedList, AddElement } from 'src/API/cheques/store/addCheques';
import { useStore } from 'effector-react';
interface ProductProps {
  cheques: ChequesTable[];
}
interface ChequesTable {
  key: React.Key,
  id: string,
  dateReg: string,
  kioskName: string,
  chequeType:number,
  paysTatus: IPays[],
  pay: IPays[],
  sum: number,
  positions: IPositions[],
  positionsName: IPositions[],
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
    render: (_, { chequeType }) => (
      <>
        {
          chequeType === 0 ? "Продажа" : "Возврат"
        }
      </>
    ), 
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
          else if (pays.sum > sum) {
            payStatus = 'Сдача';
          }     
          return (
          <div key={payStatus}>
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
          <div key={pays.sum}>
            {(pays?.sum/100).toFixed(2)+ ' ₽'}
          </div>);
        }
        )}
      </>
    ),    
  },
  {
    title: 'Сумма',
    dataIndex: 'sum',
    render: (_, { sum }) => (
      <>     
        { 
          <div>
            {(sum/100).toFixed(2)+ ' ₽'}
          </div>
        }
      </>
    ),
  },
  {
    title: 'Кол-во товара',
    dataIndex: 'positions',
    render: (_, { positions}) => (
      <>
        {positions?.map(positions => {
          return (
          <div key={Math.random()}>
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
          <div key={positions.name}>
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
  const selectedRowKeys = useStore($SelectedList)

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    AddElement(newSelectedRowKeys);
  };  

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Точно хотите удалить чек?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Да',
      cancelText: 'Отмена',
      onOk: () => {
        deleteCheques(selectedRowKeys[0])
      }      
    });
  };

  return(
    <div>
      <div className='buttons'>
      <Button type="primary" onClick={showConfirm} disabled={!hasSelected}>
          Удалить
      </Button> 
      <Mod/>
      </div>
      <Table rowSelection={{type: "radio", ...rowSelection}} columns={columns} dataSource={cheques} />
    </div>
  );
}