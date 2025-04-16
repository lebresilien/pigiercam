<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonyResource\Pages;
use App\Filament\Resources\TestimonyResource\RelationManagers;
use App\Models\Testimony;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TestimonyResource extends Resource
{
    protected static ?string $model = Testimony::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('bio')
                    ->label('Bio')
                    ->autofocus()
                    ->required()
                    ->maxLength(255)
                    ->columnSpanfull(),
                Forms\Components\FileUpload::make('picture')
                    ->label('Image')
                    ->image()
                    ->avatar()
                    ->required()
                    ->imageEditor()
                    ->imageEditorMode(2)
                    ->circleCropper()
                    ->columnSpanfull(),
                Forms\Components\RichEditor::make('description')
                    ->label('Description')
                    ->required()
                    ->columnSpanfull(),
                Forms\Components\TextInput::make('star')
                    ->label('etoile')
                    ->required()
                    ->integer()
                    ->columnSpanfull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('bio'),
                Tables\Columns\TextColumn::make('description'),
                Tables\Columns\TextColumn::make('start')
                    ->label('etoile'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListTestimonies::route('/'),
            'create' => Pages\CreateTestimony::route('/create'),
            'edit' => Pages\EditTestimony::route('/{record}/edit'),
        ];
    }
}
