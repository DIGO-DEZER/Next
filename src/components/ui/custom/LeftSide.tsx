import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Button } from '../button';
// import { useDarkMode } from './modesombre';
// import { Table } from 'lucide-react';
import data from './side-left/data.json';

/* eslint-disable @next/next/no-img-element */
export default function LeftSide() {
  return (
    <div className="">
     
        <div className="container LeftSide  grid grid-rows py-5 bg-white shadow-xl shadow-slate-200/80">
          <div className="justify-between flex">
            <div>
              <h1 className="text-2xl font-bold uppercase">Dévis générés </h1>
              <span className="font-semibold">N 001234</span>
            </div>
            <img
              className="h-10 end-20"
              src="images/logo.png"
              alt="Your Company"
            />
          </div>

          <Table className="mt-5">
            <TableHeader className="bg-slate-200 h-3">
              <TableRow>
                <TableHead className="w-[100px]">Designations</TableHead>
                <TableHead>Unités</TableHead>
                <TableHead>Qte</TableHead>
                <TableHead>Prix unitaire</TableHead>
                <TableHead className="text-right">Prix total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.Designation}
                  </TableCell>
                  <TableCell>{item.Unités}</TableCell>
                  <TableCell>{item.Qte}</TableCell>
                  <TableCell>{item.prixUnitaire}</TableCell>
                  <TableCell className="text-right">
                    {item.prixTotal.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="h-40"></div>

          <div className=" text-black mt-5">
            <h2 className="font-bold">Information complémentaire</h2>
            <p className=" mt-2">
              Le Lorem Ipsum est simplement du faux texte employé dans la
              composition et la mise en page avant impression.
            </p>
          </div>

          <div className="grid mt-6 grid-rows grid-flow-col gap-4 bg-primary">
            <div className="m-5">
              <h3 className=" text-gray-100">Détails du dévis</h3>
              <div className="mt-2 fs-sm text-gray-300">
                <p>Généré 14/07/2021</p>
                <p>Powered by prodigecom</p>
              </div>
            </div>
            <div className="text-end mt-6 mr-4 text-white">
              <h4 className="fw-500">Total du montant</h4>
              <h1 className="text-4xl font-semibold">855 000F</h1>
            </div>
          </div>
        </div>
        <div className="mt-4  text-end bg-slate-200 p-4 ">
          <div className=" mr-2">
            <Button variant="blanc">Sauvegarder</Button>
            <Button className="ml-2 primary-gradient">
              Enregistrer et envoyer
            </Button>
          </div>
        </div>
    </div>
  );
}
