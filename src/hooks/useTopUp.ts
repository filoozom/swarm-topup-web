import { Signer } from 'ethers'

// Hooks
import { useTopusePostageBatchContractUp } from './usePostageBatchContract'

type UseTopUpProps = {
	signer: Signer
}

export const useTopUp = ({ signer }: UseTopUpProps) => {
	const contract = useTopusePostageBatchContractUp({
		signerOrProvider: signer,
	})
	return contract.topUp
}
