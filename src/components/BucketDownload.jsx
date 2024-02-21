import React, { useEffect, useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import AWS from 'aws-sdk';


const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const region = process.env.REACT_APP_AWS_REGION;
const bucket = process.env.REACT_APP_S3_BUCKET_NAME;

AWS.config.update({
  region: region,
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
});

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const BucketDownload = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region,
    });

    const params = {
      Bucket: bucket
    };

    s3.listObjects(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        setObjects(data.Contents);
      }
    });
  }, []);
  const downloadFile = (key) => {
    const s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
      region: region
    });

    const params = {
      Bucket: bucket,
      Key: key
    };

    const url = s3.getSignedUrl('getObject', params);
    window.location.href = url;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl py-10'>Files Uploaded:</h1>
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
        {objects.map((object) => (
          <li key={object.ETag} className="overflow-hidden rounded-xl border border-gray-200">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-900 p-6">
              <div className="text-sm font-medium leading-6 text-gray-50">{object.Key}</div>
              <Menu as="div" className="relative ml-auto">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-50 hover:text-gray-100">
                  <span className="sr-only">Open options</span>
                  <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-green-700'
                          )}
                          onClick={() => downloadFile(object.Key)}
                        >
                          Download<span className="sr-only">, {object.Key}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6  text-red-700'
                          )}
                        >
                          Delete<span className="sr-only">, {object.Key}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-50">Last Modified</dt>
                <dd className="text-gray-50">
                  <span> {new Date(object.LastModified).toLocaleString()} </span>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-50">Language Translated</dt>
                <dd className="flex items-start gap-x-2">
                  <div
                    className='text-amber-800 bg-amber-300 ring-amber-600/20 border-2 border-amber-800  px-3 rounded-full'
                  >
                    Arabic
                  </div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BucketDownload










