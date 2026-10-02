# Bảng thuật ngữ dịch DSH → tiếng Việt

Nguồn sự thật duy nhất cho mọi bản dịch trong `src/client/locales/vi/`. Đổi một thuật ngữ ở đây
thì phải đổi đồng loạt trong các file JSON.

## Nguyên tắc

- Văn phong giao diện: ngắn, trung tính, không dùng "bạn" trừ khi câu cần chủ ngữ để rõ nghĩa.
- Nút/hành động: động từ viết hoa chữ đầu, không dấu chấm: "Lưu", "Thử lại", "Tạo thư mục".
- Câu thông báo/mô tả: viết hoa chữ đầu, có dấu chấm nếu bản gốc có.
- Giữ nguyên `{placeholder}`; được đổi vị trí trong câu, không được đổi tên.
- Giữ nguyên: tên riêng (DSH, DeepSeek, Cordis, MCP, JSON, API, URL, ID, token khi là đơn vị LLM),
  phím tắt (`Ctrl`, `Enter`), lệnh, đường dẫn, mã.
- Dấu ba chấm dùng `…` như bản gốc.
- Đơn vị thời gian: "giây", "phút", "giờ", "ngày", "tháng" (không viết tắt trừ khi bản gốc viết tắt: `s` → `giây`, `m` → `phút` khi có chỗ).

## Thuật ngữ

| English | Tiếng Việt | Ghi chú |
|---|---|---|
| agent | agent | thuật ngữ quen thuộc với dev; không dịch "tác tử" |
| subagent | subagent | |
| agent team | nhóm agent | |
| harness | harness | tên sản phẩm |
| session | phiên | "new session" → "Phiên mới" |
| conversation | cuộc trò chuyện | |
| message | tin nhắn | |
| turn | lượt | một lượt hỏi–đáp |
| prompt | prompt | |
| model | mô hình | "model ID" → "ID mô hình" |
| provider | nhà cung cấp | |
| token | token | |
| context | ngữ cảnh | "context window" → "cửa sổ ngữ cảnh" |
| compaction | nén ngữ cảnh | |
| tool / tool call | công cụ / lệnh gọi công cụ | |
| workspace | không gian làm việc | |
| file / folder / directory | tệp / thư mục / thư mục | |
| plugin | plugin | |
| package | gói | |
| registry | registry | |
| install / uninstall | cài đặt / gỡ cài đặt | |
| settings | cài đặt | mục cài đặt |
| configuration | cấu hình | |
| permission | quyền | |
| approval / approve | phê duyệt / duyệt | |
| allow / deny | cho phép / từ chối | |
| task / job | tác vụ / công việc | |
| schedule | lịch chạy | "scheduled task" → "tác vụ theo lịch" |
| plan | kế hoạch | |
| goal | mục tiêu | |
| skill | skill | |
| command / slash command | lệnh / lệnh gạch chéo | |
| shortcut | phím tắt | |
| deliverable | sản phẩm bàn giao | |
| trajectory | quỹ đạo | log từng bước agent chạy |
| preview | xem trước | |
| sidebar | thanh bên | |
| terminal | terminal | |
| browser | trình duyệt | |
| output / input | đầu ra / đầu vào | |
| feedback | phản hồi | |
| review | xem lại / đánh giá | theo ngữ cảnh |
| run / running / stopped | chạy / đang chạy / đã dừng | |
| pending / queued | đang chờ / trong hàng đợi | |
| completed / failed / cancelled | hoàn tất / thất bại / đã hủy | |
| retry / try again | thử lại | |
| loading… | đang tải… | |
| unavailable | không khả dụng | |
| copy / copied | sao chép / đã sao chép | |
| save / saved | lưu / đã lưu | |
| delete / remove | xóa / gỡ | "remove" khỏi danh sách → "gỡ" |
| edit | sửa | |
| expand / collapse | mở rộng / thu gọn | |
| enable / disable | bật / tắt | |
| sign in / sign out | đăng nhập / đăng xuất | |
| account | tài khoản | |
| default | mặc định | |
| auto | tự động | |
| theme / appearance | giao diện / diện mạo | |
| light / dark / system | sáng / tối / theo hệ thống | |
| web search | tìm kiếm web | |
| voice input | nhập bằng giọng nói | |
| question / answer | câu hỏi / câu trả lời | |
| steer / queue (gửi khi agent đang chạy) | điều hướng / xếp hàng | |
| host | Host | tiến trình máy chủ dsh; giữ nguyên |
| profile | hồ sơ | |
| credits / balance / top up | tín dụng / số dư / nạp tiền | |
| fork session | rẽ nhánh phiên | |
| pane / floating panel | ngăn / bảng nổi | |
| full access / auto review | toàn quyền / tự động duyệt | |

## Không dịch

- Token lệnh gạch chéo (`command:token.*`, ví dụ `compact`, `plan`): dsh chỉ khớp lệnh gõ với token zh/en,
  dịch sẽ làm lệnh gõ tay không chạy.
- Chuỗi chỉ gồm khoảng trắng/xuống dòng (ký tự nối câu): giữ y như bản tiếng Anh.
