import xml.etree.ElementTree as ET
from PIL import Image

def crop_images(xml_file, image_file, output_dir):
    """
    根据XML文件中的信息对图片进行裁剪

    Args:
        xml_file: XML文件路径
        image_file: 原图路径
        output_dir: 输出目录
    """

    tree = ET.parse(xml_file)
    root = tree.getroot()

    texture_name = root.find('Texture').get('name')  # 获取纹理名称

    img = Image.open(image_file)

    for image in root.findall('Images/Image'):
        name = image.get('name')
        x = int(image.get('x')) - 1
        y = int(image.get('y')) - 1
        w = int(image.get('w'))
        h = int(image.get('h'))

        # 裁剪图像
        cropped_img = img.crop((x, y, x+w, y+h))

        # 保存裁剪后的图像
        cropped_img.save(f"{output_dir}/{name}")

if __name__ == "__main__":
    xml_file = "image_ribbon_hd.xml"  # 替换为你的XML文件路径
    image_file = "image_ribbon_hd.png"  # 替换为你的图片路径
    output_dir = "cropped_images"

    crop_images(xml_file, image_file, output_dir)
