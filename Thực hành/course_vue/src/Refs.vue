<script setup>
import { ref } from "vue";

const listRef = ref(["laravel", "reactjs", "vue", "livewire"]);

// Ô input khi thêm mới
const newItem = ref("");

// Chỉ số đang sửa. = -1 nghĩa là không sửa, đang ở chế độ thêm
const editingIndex = ref(-1);

// Dùng để tạm lưu giá trị cũ khi sửa (phòng trường hợp muốn Cancel)
const originalValue = ref("");

/**
 * Thêm item mới vào listRef
 */
const addItem = () => {
    if (newItem.value.trim() !== "") {
        listRef.value.push(newItem.value);
        newItem.value = "";
    }
};

/**
 * Chuyển sang chế độ sửa 1 item tại vị trí index
 * Lưu lại giá trị gốc (để có thể Cancel)
 */
const editItem = (index) => {
    editingIndex.value = index;
    originalValue.value = listRef.value[index];
};

/**
 * Kết thúc sửa (nhưng thực chất giá trị đã đổi ngay khi gõ)
 */
const updateItem = () => {
    // Thoát chế độ sửa
    editingIndex.value = -1;
};

/**
 * Hủy bỏ sửa => khôi phục giá trị cũ
 */
const cancelEdit = () => {
    listRef.value[editingIndex.value] = originalValue.value;
    editingIndex.value = -1;
};
</script>

<template>
    <div class="container">
        <h1>Thêm & Sửa (Real-time Update)</h1>

        <!-- Nếu không sửa thì hiển thị ô input để thêm mới -->
        <div v-if="editingIndex === -1">
            <input v-model="newItem" />
            <button @click="addItem">Add</button>
        </div>

        <!-- Nếu đang sửa (editingIndex != -1) -->
        <div v-else>
            <!-- Ràng buộc trực tiếp ô input vào mảng listRef[editingIndex] -->
            <input v-model="listRef[editingIndex]" />
            <button @click="updateItem">Done</button>
            <button @click="cancelEdit">Cancel</button>
        </div>

        <hr />

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(value, index) in listRef" :key="index">
                <td>
                    <!-- Hiển thị giá trị từ listRef -->
                    {{ value }}
                </td>
                <td>
                    <button class="btn btn-primary" @click="editItem(index)">
                        Edit
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
