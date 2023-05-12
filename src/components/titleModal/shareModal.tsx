import React, { useState, ChangeEvent } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  IconButton,
  TextField,
} from '@mui/material';
import { ModalStyledDialog, ModalStyledTextField } from '@styles/modal.styled';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
//
interface ShareModalProps {
  open: boolean;
  onClose: () => void;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  category: string;
  handleCategoryChange: (e: ChangeEvent<{ value: unknown }>) => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  open,
  onClose,
  value,
  onChange,
  category,
  handleCategoryChange,
}) => {
  const [categories, setCategories] = useState<string[]>(['카테고리1', '카테고리2', '카테고리3']);
  const [newCategory, setNewCategory] = useState<string>('');

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
    }
    setNewCategory('');
  };
  return (
    <ModalStyledDialog open={open} onClose={onClose}>
      <DialogTitle>처방전</DialogTitle>
      <DialogContent>
        <ModalStyledTextField
          autoFocus
          margin="dense"
          label="처방전의 제목을 입력하세요."
          fullWidth
          value={value}
          onChange={onChange}
        />
        <Select value={category} onChange={handleCategoryChange} style={{ marginTop: '1em', width: '100%' }}>
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <TextField
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          label="새 카테고리"
          style={{ marginTop: '1em', width: '100%' }}
        />
        <IconButton onClick={handleAddCategory}>
          <AddCircleOutlineIcon />
        </IconButton>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{ backgroundColor: '#673ab7', color: 'white' }}>
          취소
        </Button>
        <Button
          onClick={onClose}
          disabled={!value}
          style={value ? { backgroundColor: '#673ab7', color: 'white' } : { backgroundColor: 'white', color: 'gray' }}
        >
          공유하기
        </Button>
      </DialogActions>
    </ModalStyledDialog>
  );
};
