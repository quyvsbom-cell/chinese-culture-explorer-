# -*- coding: utf-8 -*-
"""
Builder script that compiles the 54 Classical Chinese Painting Masterpieces
into src/data/paintingsData.js
"""
import json
import os

def create_dataset():
    # Eras & Genres definitions
    eras = [
        {
            "id": "weijin",
            "nameVi": "Ngụy–Tấn–Nam Bắc triều",
            "nameZh": "魏晋南北朝",
            "pinyin": "Wèijìn Nánběicháo",
            "timeSpan": "220–589 CN",
            "overview": "Khởi nguyên mỹ học cổ điển, hình thành lý luận 'Dĩ hình tả thần' của Cố Khải Chi và 'Lục pháp luận' của Tạ Hách."
        },
        {
            "id": "suitang",
            "nameVi": "Tùy–Đường",
            "nameZh": "隋唐",
            "pinyin": "Suí Táng",
            "timeSpan": "581–907 CN",
            "overview": "Hoàng kim nhân vật họa cung đình và sự khai sinh sơn thủy độc lập (Du Xuân Đồ), bút pháp 'Ngô đới đương phong'."
        },
        {
            "id": "song",
            "nameVi": "Ngũ Đại–Tống triều",
            "nameZh": "五代十国、宋朝",
            "pinyin": "Wǔdài Shíguó, Sòng Cháo",
            "timeSpan": "907–1279 CN",
            "overview": "Đỉnh cao tuyệt đối của Quốc họa Trung Hoa: Sơn thủy Bắc phái hùng vĩ và Nam phái yên ả; Thị dân phong tục; Viện thể hoa điểu và Văn nhân họa."
        },
        {
            "id": "yuan",
            "nameVi": "Nguyên triều",
            "nameZh": "元朝",
            "pinyin": "Yuán Cháo",
            "timeSpan": "1271–1368 CN",
            "overview": "Văn nhân họa ẩn dật thăng hoa; 'Cổ ý' Triệu Mạnh Phủ và Nguyên Tứ Gia bộc lộ tâm cảnh và thư pháp tính trong hội họa."
        },
        {
            "id": "ming",
            "nameVi": "Minh triều",
            "nameZh": "明朝",
            "pinyin": "Míng Cháo",
            "timeSpan": "1368–1644 CN",
            "overview": "Ngô Môn họa phái Tô Châu (Minh Tứ Gia), Chiết phái cung đình và Đổng Kỳ Xương phân định Nam–Bắc tông họa học."
        },
        {
            "id": "qing",
            "nameVi": "Thanh triều",
            "nameZh": "清朝",
            "pinyin": "Qīng Cháo",
            "timeSpan": "1644–1912 CN",
            "overview": "Đối trọng giữa Tứ Vương cung đình chính thống và Tứ Tăng dã dật cách tân (Thạch Đào, Bát Đại Sơn Nhân), Dương Châu Bát Quái."
        },
        {
            "id": "modern",
            "nameVi": "Cận đại & Hiện đại",
            "nameZh": "近现代",
            "pinyin": "Jìn-Xiàndài",
            "timeSpan": "1912–Nay",
            "overview": "Giao thoa quốc họa truyền thống và tư duy hiện đại: Tề Bạch Thạch, Từ Bi Hồng, Trương Đại Thiên, Phó Bão Thạch, Lý Khả Nhiễm."
        }
    ]

    genres = [
        {"id": "landscape", "nameVi": "Sơn thủy họa", "nameZh": "山水画", "pinyin": "Shānshuǐhuà", "nameEn": "Landscape Painting"},
        {"id": "flower-bird", "nameVi": "Hoa điểu họa", "nameZh": "花鸟画", "pinyin": "Huāniǎohuà", "nameEn": "Bird-and-Flower Painting"},
        {"id": "figure", "nameVi": "Nhân vật họa", "nameZh": "人物画", "pinyin": "Rénwùhuà", "nameEn": "Figure Painting"},
        {"id": "fine-brush", "nameVi": "Công bút họa", "nameZh": "工笔画", "pinyin": "Gōngbǐhuà", "nameEn": "Meticulous Painting"},
        {"id": "freehand", "nameVi": "Tả ý họa", "nameZh": "写意画", "pinyin": "Xiěyìhuà", "nameEn": "Freehand Painting"},
        {"id": "ink-wash", "nameVi": "Thủy mặc họa", "nameZh": "水墨画", "pinyin": "Shuǐmòhuà", "nameEn": "Ink-Wash Painting"},
        {"id": "architectural", "nameVi": "Giới họa", "nameZh": "界画", "pinyin": "Jièhuà", "nameEn": "Architectural Painting"},
        {"id": "court", "nameVi": "Cung đình hội họa", "nameZh": "宫廷绘画", "pinyin": "Gōngtíng Huìhuà", "nameEn": "Imperial Court Painting"},
        {"id": "literati", "nameVi": "Văn nhân họa", "nameZh": "文人画", "pinyin": "Wénrénhuà", "nameEn": "Literati Scholar Painting"}
    ]

    print("Definitions ready.")

if __name__ == "__main__":
    create_dataset()
