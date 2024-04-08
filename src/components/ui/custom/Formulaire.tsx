import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';

interface User {
  id: number;
  username: string;
  email: string;
}

export default async function Formulaire() {

  return (
    <>
      <Dialog>
        <DialogTrigger className="primary-gradiant relative left-24">
          Cliquez-ici
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div>
                <h4 className="text-gray-600">
                  Merci de renseigner les informations suivantes pour
                  enregistrer votre devis
                </h4>
                <div className="grid w-full  items-center mt-4 gap-4">
                  <Label htmlFor="email">Adresse email</Label>
                  <Input
                    className=""
                    type="email"
                    name="email"
                    placeholder="exemple@gmail.com"

                  />
                </div>
                <div className="grid w-full  items-center mt-4 gap-4">
                  <Label htmlFor="tel">Numéro de téléphone</Label>
                  <Input
                    className=""
                    type="tel"
                    name="phoneNumber"
                    placeholder="0700000000"

                  />
                </div>
                <div className="grid w-full items-center mt-4 gap-4">
                  <Label htmlFor="nom">Nom complet</Label>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Toto jean dupont"

                  />
                </div>
                <Button type="submit" className="ml-2 primary-gradiant mt-5">
                  Enregistrer le devis
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

