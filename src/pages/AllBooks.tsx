"use client";

import { books } from "@/utils/data";
import { Table } from "flowbite-react";

export default function AllBooks() {
  return (
    <div className="container mx-auto overflow-x-scroll">
      <h4 className="text-center font-extrabold tracking-tight text-3xl mb-4">
        All Books
      </h4>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>SL. No</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Genre</Table.HeadCell>
          <Table.HeadCell>Publication Date</Table.HeadCell>
          <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {books.map((book, index) => (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>

              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.genre}</Table.Cell>
              <Table.Cell>{book.publicationDate}</Table.Cell>
              <Table.Cell className="flex gap-3">
                <a
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  <p>Edit</p>
                </a>
                <a
                  className="font-medium text-red-600 hover:underline dark:text-cyan-500"
                  href="/tables"
                >
                  <p>Delete</p>
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
