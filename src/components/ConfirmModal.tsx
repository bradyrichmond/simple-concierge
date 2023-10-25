import { forwardRef } from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

interface ConfirmModalProps {
    cancel?: () => void
    confirm: () => void
    validationText: string
    cancelText?: string
    confirmText: string
}

const ConfirmModal = forwardRef((props: ConfirmModalProps) => {
    const { cancel, confirm, validationText, cancelText, confirmText } = props;

    return (
        <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem' maxWidth='30%'>
            <Typography variant='h6' component='h2' marginBottom='2rem'>
                {validationText}
            </Typography>
            <Box display='flex' flexDirection='column'>
                {cancel && <Button type='submit' variant='contained' onClick={cancel}>{cancelText}</Button>}
                <Button type='submit' variant='contained' onClick={confirm}>{confirmText}</Button>
            </Box>
        </Box>
    )
})

export default ConfirmModal;