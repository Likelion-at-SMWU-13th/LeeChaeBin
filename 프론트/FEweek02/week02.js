// DOM 요소 선택
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// 할 일 추가 함수
function addTodo(event) {
  event.preventDefault(); // 폼 제출 방지

  const todoText = todoInput.value.trim();

  if (todoText !== "") {
    // 새 할 일 아이템 생성
    const todoItem = document.createElement("li");
    todoItem.className = "todo-item";

    // 할 일 텍스트 추가
    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todoText;

    // 삭제 버튼 추가
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "삭제";

    // 요소 조립
    todoItem.appendChild(todoTextSpan);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    // 입력 필드 초기화
    todoInput.value = "";
  }
}

// 할 일 완료/삭제 처리 함수 (🔥 addTodo 밖으로 이동)
function handleTodoClick(event) {
  const target = event.target;

  // 삭제 버튼 클릭 시
  if (target.classList.contains("delete-btn")) {
    target.parentElement.remove();
  }

  // 할 일 항목 클릭 시 (완료 표시)
  else if (target.tagName === "SPAN") {
    target.parentElement.classList.toggle("completed");
  }
}

// 이벤트 리스너 등록 (🔥 click 이벤트 리스너 추가)
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", handleTodoClick);