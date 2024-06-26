import * as Dialog from "@radix-ui/react-dialog";

import inviteUserIcon from "../../assets/userAdd.png";
import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { FormHeader } from "../FormHeader";

export const InviteUserModal: React.FC = () => {
  const roomUrl = window.location.href;

  const inputOnClickhandle: React.MouseEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const input = event.currentTarget;
    input.select();
  };

  const copyRoomUrl = () => {
    navigator.clipboard.writeText(roomUrl);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button className="flex gap-2 bg-blue-50 px-5 py-[0.6rem] text-blue-800 hover:brightness-95 dark:bg-darkBlue-400 dark:text-blue-700 dark:hover:brightness-110">
          <span className="text-sm">Convidar</span>
          <img width={18} src={inviteUserIcon} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 animate-overlayShow bg-black bg-opacity-30" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-6 py-6 text-gray-850 shadow-md dark:bg-darkBlue-900 dark:text-gray-300">
          <header>
            <FormHeader title="Convidar" fontWeight="semibold" />
            <Dialog.Description className="mt-3 text-center text-base font-semibold">
              Para convidar compartilhe o link com outro usuário
            </Dialog.Description>
            <Dialog.DialogClose asChild>
              <Button
                className="group absolute right-6 top-6 flex h-6 w-6 -translate-y-1/2 translate-x-1/2 items-center justify-center hover:dark:text-gray-600"
                aria-label="Close"
              >
                <span className="font-semibold group-hover:text-opacity-80">
                  X
                </span>
              </Button>
            </Dialog.DialogClose>
          </header>

          <div className="mt-2">
            <div className="mx-1 flex gap-2 font-semibold placeholder:text-gray-800">
              <Input readonly value={roomUrl} onClick={inputOnClickhandle} />
              <Button
                className="flex items-center justify-center text-gray-850 hover:text-opacity-80 dark:text-white hover:dark:text-gray-300"
                onClick={copyRoomUrl}
              >
                <span className="font-semibold">Copiar</span>
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
