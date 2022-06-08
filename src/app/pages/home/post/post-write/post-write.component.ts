/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../../../../../environments/environment';

@Component({
  selector: 'app-post-write',
  templateUrl: './post-write.component.html',
  styleUrls: ['./post-write.component.less']
})
export class PostWriteComponent implements OnInit {

  type!: string;
  postForm!: FormGroup;
  content = '';
  tinyConfig = {
    language: this.translate.getDefaultLang(),
    language_url: 'assets/tinymce/langs/zh_CN.js',
    base_url: APP_CONFIG.production ? './tinymce/' : '/tinymce/',
    suffix: '.min',
    plugins: 'preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor  insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    menubar: '',
    toolbar: 'undo redo removeformat | formatselect fontsizeselect bold italic strikethrough underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist | outdent indent lineheight | charmap emoticons | fullscreen  preview | image media template link blockquote anchor codesample | ltr rtl',
    statusbar: false,
    height: 650,
    fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'XML', value: 'xml' },
      { text: 'HTML', value: 'html' },
      { text: 'mathml', value: 'mathml' },
      { text: 'SVG', value: 'svg' },
      { text: 'CSS', value: 'css' },
      { text: 'Clike', value: 'clike' },
      { text: 'Javascript', value: 'javascript' },
      { text: 'ActionScript', value: 'actionscript' },
      { text: 'apacheconf', value: 'apacheconf' },
      { text: 'apl', value: 'apl' },
      { text: 'applescript', value: 'applescript' },
      { text: 'asciidoc', value: 'asciidoc' },
      { text: 'aspnet', value: 'aspnet' },
      { text: 'autoit', value: 'autoit' },
      { text: 'autohotkey', value: 'autohotkey' },
      { text: 'bash', value: 'bash' },
      { text: 'basic', value: 'basic' },
      { text: 'batch', value: 'batch' },
      { text: 'c', value: 'c' },
      { text: 'brainfuck', value: 'brainfuck' },
      { text: 'bro', value: 'bro' },
      { text: 'bison', value: 'bison' },
      { text: 'C#', value: 'csharp' },
      { text: 'C++', value: 'cpp' },
      { text: 'CoffeeScript', value: 'coffeescript' },
      { text: 'ruby', value: 'ruby' },
      { text: 'd', value: 'd' },
      { text: 'dart', value: 'dart' },
      { text: 'diff', value: 'diff' },
      { text: 'docker', value: 'docker' },
      { text: 'eiffel', value: 'eiffel' },
      { text: 'elixir', value: 'elixir' },
      { text: 'erlang', value: 'erlang' },
      { text: 'fsharp', value: 'fsharp' },
      { text: 'fortran', value: 'fortran' },
      { text: 'git', value: 'git' },
      { text: 'glsl', value: 'glsl' },
      { text: 'go', value: 'go' },
      { text: 'groovy', value: 'groovy' },
      { text: 'haml', value: 'haml' },
      { text: 'handlebars', value: 'handlebars' },
      { text: 'haskell', value: 'haskell' },
      { text: 'haxe', value: 'haxe' },
      { text: 'http', value: 'http' },
      { text: 'icon', value: 'icon' },
      { text: 'inform7', value: 'inform7' },
      { text: 'ini', value: 'ini' },
      { text: 'j', value: 'j' },
      { text: 'jade', value: 'jade' },
      { text: 'java', value: 'java' },
      { text: 'JSON', value: 'json' },
      { text: 'jsonp', value: 'jsonp' },
      { text: 'julia', value: 'julia' },
      { text: 'keyman', value: 'keyman' },
      { text: 'kotlin', value: 'kotlin' },
      { text: 'latex', value: 'latex' },
      { text: 'less', value: 'less' },
      { text: 'lolcode', value: 'lolcode' },
      { text: 'lua', value: 'lua' },
      { text: 'makefile', value: 'makefile' },
      { text: 'markdown', value: 'markdown' },
      { text: 'matlab', value: 'matlab' },
      { text: 'mel', value: 'mel' },
      { text: 'mizar', value: 'mizar' },
      { text: 'monkey', value: 'monkey' },
      { text: 'nasm', value: 'nasm' },
      { text: 'nginx', value: 'nginx' },
      { text: 'nim', value: 'nim' },
      { text: 'nix', value: 'nix' },
      { text: 'nsis', value: 'nsis' },
      { text: 'objectivec', value: 'objectivec' },
      { text: 'ocaml', value: 'ocaml' },
      { text: 'oz', value: 'oz' },
      { text: 'parigp', value: 'parigp' },
      { text: 'parser', value: 'parser' },
      { text: 'pascal', value: 'pascal' },
      { text: 'perl', value: 'perl' },
      { text: 'PHP', value: 'php' },
      { text: 'processing', value: 'processing' },
      { text: 'prolog', value: 'prolog' },
      { text: 'protobuf', value: 'protobuf' },
      { text: 'puppet', value: 'puppet' },
      { text: 'pure', value: 'pure' },
      { text: 'python', value: 'python' },
      { text: 'q', value: 'q' },
      { text: 'qore', value: 'qore' },
      { text: 'r', value: 'r' },
      { text: 'jsx', value: 'jsx' },
      { text: 'rest', value: 'rest' },
      { text: 'rip', value: 'rip' },
      { text: 'roboconf', value: 'roboconf' },
      { text: 'crystal', value: 'crystal' },
      { text: 'rust', value: 'rust' },
      { text: 'sas', value: 'sas' },
      { text: 'sass', value: 'sass' },
      { text: 'scss', value: 'scss' },
      { text: 'scala', value: 'scala' },
      { text: 'scheme', value: 'scheme' },
      { text: 'smalltalk', value: 'smalltalk' },
      { text: 'smarty', value: 'smarty' },
      { text: 'SQL', value: 'sql' },
      { text: 'stylus', value: 'stylus' },
      { text: 'swift', value: 'swift' },
      { text: 'tcl', value: 'tcl' },
      { text: 'textile', value: 'textile' },
      { text: 'twig', value: 'twig' },
      { text: 'TypeScript', value: 'typescript' },
      { text: 'verilog', value: 'verilog' },
      { text: 'vhdl', value: 'vhdl' },
      { text: 'wiki', value: 'wiki' },
      { text: 'YAML', value: 'yaml' }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.type = this.route.snapshot.data.type;

    this.postForm = this.fb.group({
      title: [null],
      tags: [null],
      category: [null]
    });
  }

}
