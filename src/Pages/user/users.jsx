import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from 'react-icons/io5';

import { callApi } from '../../utils/CallApi';
import { FiCheck } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { toast } from 'react-toastify';
import ViewEditUser from '../../components/Popups/ViewEditUser';
import DeletePopup from '../../components/deletePopups/DeletePopups';
import ApproveDisApprove from '../../components/Popups/ApproveDisapprove';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [userPopup, setUserPopup] = useState(false);
  const [userMode, setUserMode] = useState('view');
  const [delId, setDelId] = useState('');
  const [actionId, setActionId] = useState();
  const [action, setAction] = useState('');
  const [userRow, setUserRow] = useState({});
  const [delPopup, setDelPopup] = useState(false);
  const [approvePopup, setApprovePopup] = useState(false);

  const openUserPopup = (e, mode, data) => {
    e.stopPropagation();
    setUserPopup(true);
    setUserMode(mode);
    setUserRow(data);
  };

  const deletePopToggle = async (id) => {
    setDelId(id);
    setDelPopup(true);
  };

  const deleteUser = async (delId) => {
    let value = {
      userid: delId,
      active: false,
    };
    setDelPopup(false);
    try {
      const res = await callApi('/users/activeUser', 'post', value);
      if (res.status === 'Success') {
        toast.success(res.message);

        let oldUsers = users;
        const updateUsers = oldUsers.filter(
          (user) => user._id !== res.data._id
        );
        setUsers(updateUsers);
      } else {
        toast.error(res.message);
      }
    } catch (error) { }
  };


  const ApprovePopup = (data) => {
    setAction(data.status)
    setActionId(data.id)
    setApprovePopup(true)
  }

  const handleApproved = async () => {
    console.log('This is approved function');
    let value = {
      userid: actionId,
      approved: action,
    };
    try {
      const res = await callApi('/users/approveDisapproveUser', 'post', value);
      if (res.status === 'Success') {
        toast.success(res.message);
        let oldUsers = users;
        const updateUsers = oldUsers.map((user) => {
          if (user._id === res.data._id) {
            user.approved = action;
          }
          return user;
        });
        setUsers(updateUsers);
      } else {
        toast.error(res.message);
      }
    } catch (error) { }
  };

  useEffect(() => {
    if (!userPopup)
      (async () => {
        try {
          let payload = {
            sortProperty: 'createdAt',
            sortOrder: -1,
            offset: 0,
            limit: 50,
            query: {
              critarion: { active: true },
              addedBy: '_id email first_name',
              lastModifiedBy: '_id email first_name',
            },
          };

          let response = await callApi('/users/listAllUsers', 'post', payload);
          console.warn("response============", response)
          setUsers(response?.data?.users);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [userPopup]);
  return (
    <div className='bscontainer-fluid'>
      <ViewEditUser
        id='user-modal'
        data={userRow}
        mode={userMode}
        show={userPopup}
        onClose={() => setUserPopup(false)}
      />
      {delPopup && (
        <DeletePopup
          permition={delPopup}
          callback={() => {
            deleteUser(delId);
          }}
          Toggle={() => setDelPopup(false)}
        />
      )}

      {
        approvePopup &&
        <ApproveDisApprove
          permition={approvePopup}
          callback={() => {
            handleApproved();
          }}
          ActionType={action}
          Toggle={() => setApprovePopup(false)}
        />
      }

      <div className='row py-5'>
        <div className='col-12  mb-5'>
          <div className='mb-3'>
            <ul className='inline-flex flex-wrap text-sm font-medium'>
              <li className='flex items-center'>
                <Link
                  to='/dashboard'
                  className='text-slate-500 hover:text-indigo-500'
                >
                  Dashboard{' '}
                </Link>
                <svg
                  className='h-4 w-4 fill-current text-slate-400 mx-3'
                  viewBox='0 0 16 16'
                >
                  <path d='M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z' />
                </svg>
              </li>
              <li className='flex items-center'>
                <Link
                  to='/user/list'
                  className='text-slate-500 hover:text-indigo-500'
                  href='#0'
                >
                  User
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to='create-user'
            className='p-2 flex w-[15%] items-center rounded-sm  bg-red-500 hover:bg-green-600 text-white'
          >
            <svg
              className='w-4 h-4 fill-current opacity-50 shrink-0'
              viewBox='0 0 16 16'
            >
              <path d='M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z' />
            </svg>
            <span className='ml-2'>Create User</span>
          </Link>
        </div>
        <div className='col-12 border'>
          <div className='bg-white shadow-lg rounded-sm border border-slate-200 relative'>
            <header className='px-5 py-4'>
              <h2 className='font-semibold text-slate-800'>
                All Users{' '}
                <span className='text-slate-400 font-medium'>
                  {users?.length}
                </span>
              </h2>
            </header>
            <div>
              <div className='overflow-x-auto'>
                <table className='table-auto w-full'>
                  <thead className='text-xs font-semibold uppercase text-slate-500 bg-slate-50 border-t border-b border-slate-200'>
                    <tr>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>ID</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Name</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Email</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>
                          Phone Number
                        </div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Role</div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>
                          Registered Date
                        </div>
                      </th>
                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Status</div>
                      </th>

                      <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                        <div className='font-semibold text-left'>Actions</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='text-sm divide-y divide-slate-200'>
                    {users?.map((user, i) => {
                      return (
                        <tr key={user._id}>
                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='text-left'>{user._id}</div>
                          </td>
                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='text-left'>{user.first_name}</div>
                          </td>
                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='text-left'>{user.email}</div>
                          </td>
                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='text-left'>{user.phoneNumber}</div>
                          </td>
                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='text-left'>{user.role}</div>
                          </td>
                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                            <div className='text-left'>{user.created_at}</div>
                          </td>
                          <td>
                            <div className='flex justify-center items-center'>
                              {user.approved === "approved" || user.approved === "disapproved" ?
                                <button
                                  className={user.approved === "approved" ? 'p-2 rounded-md border-green-600 border text-green-600' : 'p-2 rounded-md border-red-600 border text-red-600' }
                                // onClick={() => {
                                //   handleApproved(user._id, false);
                                // }}
                                >
                                  <span className='ml-2'>{user.approved}</span>
                                </button>

                                :
                                <>
                                  <div onClick={() => ApprovePopup({status: 'approved' , id:  user._id })} className=' cursor-pointer rounded-full w-[30px] h-[30px] border-2 pt-1 border-green-600  flex justify-center'>
                                    <FiCheck className='text-[18px] text-green-600' />
                                  </div>
                                  <div onClick={() => ApprovePopup({ status : 'disapproved' , id:  user._id })} className=' cursor-pointer rounded-full w-[30px] h-[30px] border-2 pt-1 border-red-600 mx-2 flex justify-center'>
                                    <MdClose className='text-[18px] text-red-600' />
                                  </div>
                                </>
                              }
                            </div>
                          </td>
                          {/* {user.approved && (
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                              <div className='text-left'>
                                <button
                                  className='p-2 rounded-md bg-green-600 text-white'
                                  onClick={() => {
                                    handleApproved(user._id, false);
                                  }}
                                >
                                  <span className='ml-2'>Approved</span>
                                </button>
                              </div>
                            </td>
                          )}
                          {!user.approved && (
                            <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                              <div className='text-left'>
                                <button
                                  className='p-2 rounded-md bg-red-500 text-white'
                                  onClick={() => {
                                    handleApproved(user._id, true);
                                  }}
                                >
                                  <span className='ml-2'>DisApproved</span>
                                </button>
                              </div>
                            </td>
                          )} */}

                          <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px'>
                            <div className='space-x-1'>
                              <button
                                className='text-slate-400 hover:text-slate-500 rounded-full'
                                onClick={(e) => openUserPopup(e, 'edit', user)}
                              >
                                <span className='sr-only'>Edit</span>
                                <svg
                                  className='w-8 h-8 fill-current'
                                  viewBox='0 0 32 32'
                                >
                                  <path d='M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z' />
                                </svg>
                              </button>
                              <button
                                className='text-slate-400 hover:text-slate-500 rounded-full'
                                onClick={(e) => openUserPopup(e, 'view', user)}
                              >
                                <IoEyeOutline
                                  className='text-red-500 hover:text-green-600'
                                  size={23}
                                />
                              </button>
                              <button
                                className='text-rose-500 hover:text-rose-600 rounded-full'
                                onClick={() => deletePopToggle(user._id)}
                              >
                                <span className='sr-only'>Delete</span>
                                <svg
                                  className='w-8 h-8 fill-current'
                                  viewBox='0 0 32 32'
                                >
                                  <path d='M13 15h2v6h-2zM17 15h2v6h-2z' />
                                  <path d='M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z' />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
