import { create } from 'zustand';
import {
  createChecksumAddressSlice,
  createMimicWalletSlice,
  createExtensionSettingsSlice,
  createBitManipulationSlice,
  createReadWriteContractUiSlice,
  createAbiEncoderUiSlice,
} from './slices';
import { createSelectors } from './selectors';
import { GlobalState } from './state';
import { persist, createJSONStorage } from 'zustand/middleware';

const useGlobalStoreBase = create<GlobalState>((...a) => ({
  ...createChecksumAddressSlice(...a),
  ...createMimicWalletSlice(...a),
  ...createExtensionSettingsSlice(...a),
  ...createBitManipulationSlice(...a),
  ...createReadWriteContractUiSlice(...a),
  ...createAbiEncoderUiSlice(...a),
}));

const usePersistGlobalStoreBase = create<GlobalState>()(
  persist(
    (...a) => ({
      ...createChecksumAddressSlice(...a),
      ...createMimicWalletSlice(...a),
      ...createExtensionSettingsSlice(...a),
      ...createBitManipulationSlice(...a),
      ...createReadWriteContractUiSlice(...a),
      ...createAbiEncoderUiSlice(...a),
    }),
    {
      name: 'evm-tools', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);

const isAllowPersist = true;
export const useGlobalStore = isAllowPersist
  ? createSelectors(usePersistGlobalStoreBase)
  : createSelectors(useGlobalStoreBase);
